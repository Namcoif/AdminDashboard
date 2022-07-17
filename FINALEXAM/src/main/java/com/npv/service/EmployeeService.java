package com.npv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npv.entity.Employee;
import com.npv.repository.IEmployeeRepository;

@Service
public class EmployeeService implements IEmployeeService{
	
	
	@Autowired
	IEmployeeRepository epRepository;

	@Override
	public List<Employee> getListEmployeees() {
		return epRepository.findAll();
	}
	
	
}
