
package com.npv.specification;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import com.npv.entity.Department;
import com.npv.form.DepartmentFilterForm;

public class DepartmentSpecification {
	public static Specification<Department> buildWhere(String search, DepartmentFilterForm dpFF) {
		Specification<Department> where = null;
		
		if (!StringUtils.isEmpty(search)) {
			search = search.trim();
			CustomSpecificationDepartment name = new CustomSpecificationDepartment("name", search);
			where = Specification.where(name);	
		}
		
		if (dpFF != null && !StringUtils.isEmpty(dpFF.getType())) {
			CustomSpecificationDepartment type = new CustomSpecificationDepartment("type", dpFF.getType());
			if (where == null) where = type;
			else where = where.and(type);
		}
		
		if (dpFF != null && dpFF.getMinDate() != null) {
			CustomSpecificationDepartment minDate = new CustomSpecificationDepartment("minDate", dpFF.getMinDate());
			if (where == null) where = minDate;
			else where = where.and(minDate);
		}
		
		if (dpFF != null && dpFF.getMaxDate() != null) {
			CustomSpecificationDepartment maxDate = new CustomSpecificationDepartment("maxDate", dpFF.getMaxDate());
			if (where == null) where = maxDate;
			else where = where.and(maxDate);
		}
		System.out.println(where);
		return where;
	}
}
