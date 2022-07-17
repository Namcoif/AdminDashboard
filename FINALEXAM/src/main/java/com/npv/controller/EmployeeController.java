package com.npv.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npv.dto.EmployeeDTO;
import com.npv.entity.Employee;
import com.npv.service.EmployeeService;

@RestController
@RequestMapping(value = "api/")
public class EmployeeController {
	
	
	@Autowired
	private EmployeeService epService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("employeees")
	public List<EmployeeDTO> getListEmployeees() {
		List<Employee> listEpEntity = epService.getListEmployeees();
		
		//Fix nested by DTO(Solution 1)
//		List<EmployeeDTO> listEpDTO = new ArrayList<>();
//		
//		for (Employee ep : listEpEntity) {
//			System.out.println(ep.getDepartment().getName());
//			EmployeeDTO epDTO = new EmployeeDTO(ep.getName(), ep.getDepartment().getName().toString());
//			listEpDTO.add(epDTO);
//		}
		
		//Fix nested by ModelMapper (Solution 2)
		List<EmployeeDTO> listEpDTO = modelMapper.map(listEpEntity, new TypeToken< List<EmployeeDTO> >(){}.getType());
		
		return listEpDTO;
	}
	
}
