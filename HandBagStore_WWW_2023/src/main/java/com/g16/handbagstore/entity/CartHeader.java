package com.g16.handbagstore.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart_headers")
public class CartHeader implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private int customerId;
	@Column(name = "total_price", columnDefinition = "money", nullable = false)
	private BigDecimal totalPrice;
	@Column(name = "total_quantity", columnDefinition = "int", nullable = false)
	private int totalQuantity;

	@OneToOne
	@MapsId
	@JoinColumn(name = "customer_id")
	private User customer;
	
	public CartHeader(BigDecimal totalPrice, int totalQuantity, User customer) {

		this.totalPrice = totalPrice;
		this.totalQuantity = totalQuantity;
		this.customer = customer;
	}

	public CartHeader() {
		super();
	}

	public int getId() {
		return customerId;
	}

	public void setId(int id) {
		this.customerId = id;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}

	public int getTotalQuantity() {
		return totalQuantity;
	}

	public void setTotalQuantity(int totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "CartHeader [id=" + customerId + ", totalPrice=" + totalPrice + ", totalQuantity=" + totalQuantity + "]";
	}
}
