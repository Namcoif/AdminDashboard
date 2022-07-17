package com.npv.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.npv.dto.DepartmentDTO;
import com.npv.entity.Department;
import com.npv.form.DepartmentFilterForm;

public interface IDepartmentService {
	Page<Department> getListDeparments(Pageable pageble, String search, DepartmentFilterForm dpFF);
	
	List<Department> getListDepartment();
	
	void createDepartment(DepartmentDTO dpDTO);
}
