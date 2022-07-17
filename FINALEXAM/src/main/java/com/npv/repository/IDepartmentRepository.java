package com.npv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.npv.entity.Department;

@Repository
public interface IDepartmentRepository extends JpaRepository<Department, Integer>, JpaSpecificationExecutor<Department>{
	
}
