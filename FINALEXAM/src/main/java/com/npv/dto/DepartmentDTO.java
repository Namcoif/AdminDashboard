package com.npv.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class DepartmentDTO {
	private int id;
	
	private String name;
	
	private int totalMember;
	
	private String type;

	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date createdAt;
	
	private List<AccountDTO2> accounts;
	
	@Data
	static class AccountDTO2 {
		private int id;
		private String username;
		private String firstName;
		private String lastName;
		private String role;
		private String password;
	}
}
