package com.g16.handbagstore.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "brands")
public class Brand implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "brand_id")
	private int brandId;
	@Column(name = "name", columnDefinition = "nvarchar(255)", nullable = false)
	private String name;

	@OneToMany(mappedBy = "brand")
	private List<BagCategory> listBagCategories;

	public Brand(int id, String name) {
		super();
		this.brandId = id;
		this.name = name;
	}

	public Brand(String name) {
		super();
		this.name = name;
	}

	public Brand() {
		super();
	}

	public int getId() {
		return brandId;
	}

	public void setId(int id) {
		this.brandId = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Brand [id=" + brandId + ", name=" + name + "]";
	}
}
