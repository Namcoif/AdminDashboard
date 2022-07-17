package com.npv.dto;

import lombok.Data;

@Data
public class AccUpdateDTO {
	private int id;

	private String password;

	private String firstName;

	private String lastName;

	private String role;
	private String username;
	private String email;
	
	private String avatarUrl;
	

}
