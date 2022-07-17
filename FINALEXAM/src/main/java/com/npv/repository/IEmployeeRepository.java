package com.npv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.npv.entity.Employee;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Integer>{

}
