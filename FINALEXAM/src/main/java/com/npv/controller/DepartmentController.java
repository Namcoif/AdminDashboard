package com.npv.controller;

import java.util.List;

import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.npv.dto.AccountDTO;
import com.npv.dto.DepartmentDTO;
import com.npv.entity.Account;
import com.npv.entity.Department;
import com.npv.form.DepartmentFilterForm;
import com.npv.service.DepartmentService;

@RestController
@RequestMapping(value = "api/departments")
public class DepartmentController {
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private DepartmentService dpService;
	
	@GetMapping(value = "/list")
	public List<Department> getListAccounts() {
		return dpService.getListDepartment();
	}
	
	@GetMapping()
	public Page<DepartmentDTO> getListDeparments(Pageable pageable,
			@RequestParam(value = "search", required = false) String search, DepartmentFilterForm dpFF) {
		System.out.println(dpFF);
		Page<Department> pageDepartment = dpService.getListDeparments(pageable, search, dpFF);
		List<DepartmentDTO> listDepartmentDTO = modelMapper.map(pageDepartment.getContent(), 
				new TypeToken<List<DepartmentDTO>>(){}.getType());
		Page<DepartmentDTO> pageDepartmentDTO = new PageImpl(listDepartmentDTO, pageable, pageDepartment.getTotalElements());
		return pageDepartmentDTO;
	}
	
	@PostMapping()
	public ResponseEntity<?> createDepartment(@RequestBody DepartmentDTO dpDTO) {
		System.out.println(dpDTO);
		dpService.createDepartment(dpDTO);
		JSONObject message = new JSONObject();
		message.put("rusultText", "Department inserted successfully");
		message.put("status", 200);
		return ResponseEntity.status(HttpStatus.OK).body(message.toString());
	}

}
