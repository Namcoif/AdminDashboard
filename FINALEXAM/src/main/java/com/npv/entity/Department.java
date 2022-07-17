package com.npv.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "Department")
@Data
@NoArgsConstructor
public class Department{
	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name", length = 50, nullable = false)
	private String name;
	
	@Column(name = "total_member", nullable = false)
	private int totalMember;
	
	@Column(name = "type", columnDefinition = "ENUM('Dev', 'Test', 'ScrumMaster', 'PM')")
	@Enumerated(EnumType.STRING)
	@NonNull
	private DepartmentType type;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
//	@Temporal(TemporalType.TIMESTAMP)
//	@CreationTimestamp
	private Date createdAt;
	
	@OneToMany(mappedBy = "department")
	private List<Account> accounts;
	
	public enum DepartmentType {
		Dev, Test, ScrumMaster, PM;
		
		public static DepartmentType toEnum(String type) {
			for(DepartmentType item : DepartmentType.values()) {
				if (item.toString().equals(type)) return item;
			}
			return null;
		}
	}
}
