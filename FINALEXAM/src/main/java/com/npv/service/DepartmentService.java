package com.npv.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.npv.dto.DepartmentDTO;
import com.npv.entity.Account;
import com.npv.entity.Department;
import com.npv.form.DepartmentFilterForm;
import com.npv.repository.IAccountRepository;
import com.npv.repository.IDepartmentRepository;
import com.npv.specification.DepartmentSpecification;

@Service
public class DepartmentService implements IDepartmentService{
	@Autowired
	private IDepartmentRepository dpRepository;
	
	@Autowired
	private IAccountRepository acRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public Page<Department> getListDeparments(Pageable pageble, String search, DepartmentFilterForm dpFF) {
		Specification<Department> where = DepartmentSpecification.buildWhere(search, dpFF);
		return dpRepository.findAll(where, pageble);
	}
	
	@Override
	public List<Department> getListDepartment() {
		return dpRepository.findAll();
	}

	@Override
	@Transactional
	public void createDepartment(DepartmentDTO dpDTO) {
		Department dp = modelMapper.map(dpDTO, Department.class);
		Department department = dpRepository.save(dp);
		
//		List<Account> accounts = department.getAccounts();
//		for(Account account : accounts) {
//			account.setDepartment(department);
//		}
//		acRepository.saveAll(accounts);
	}

}
