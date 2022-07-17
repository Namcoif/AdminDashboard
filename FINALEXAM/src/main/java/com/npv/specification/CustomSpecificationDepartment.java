package com.npv.specification;

import java.util.Date;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.npv.entity.Department;
import com.npv.entity.Department.DepartmentType;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@SuppressWarnings("serial")
@RequiredArgsConstructor
public class CustomSpecificationDepartment implements Specification<Department>{
	
	@NonNull
	private String field;
	
	@NonNull
	private Object value;
	
	@Override
	public Predicate toPredicate(Root<Department> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
		if (field.equalsIgnoreCase("name")) {
			return criteriaBuilder.like(root.get("name"), "%" + value.toString() + "%");
		}else if (field.equalsIgnoreCase("minDate")) {
			   Expression es = root.get("createdDate");
			   return criteriaBuilder.greaterThanOrEqualTo(root.get("createdDate"), (Date)value);
		}else if (field.equalsIgnoreCase("maxDate")) {
			   Expression es = root.<Date>get("createdDate");
			   return criteriaBuilder.lessThanOrEqualTo(root.get("createdDate"), (Date)value);
		}else if (field.equalsIgnoreCase("type")) {
			return criteriaBuilder.equal(root.get("type"), DepartmentType.toEnum(value.toString()));
		}
		
		return null;
	}
}
