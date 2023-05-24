package com.g16.handbagstore.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@IdClass(CartDetailPK.class)
@Table(name = "cart_details")
public class CartDetail implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@ManyToOne
	@JoinColumn(name = "cart_header_id")
	private CartHeader cartHeader;
	@Id
	@ManyToOne
	@JoinColumn(name = "bag_id")
	private Bag bag;
	@Column(name = "bag_qty", columnDefinition = "int", nullable = false)
	private int bagQty;

	public CartDetail(CartHeader cartHeader, Bag bag, int bagQty) {
		super();
		this.cartHeader = cartHeader;
		this.bag = bag;
		this.bagQty = bagQty;
	}

	public CartDetail() {
		super();
	}

	public CartHeader getCartHeader() {
		return cartHeader;
	}

	public void setCartHeader(CartHeader cartHeader) {
		this.cartHeader = cartHeader;
	}

	public Bag getBag() {
		return bag;
	}

	public void setBag(Bag bag) {
		this.bag = bag;
	}

	public int getBagQty() {
		return bagQty;
	}

	public void setBagQty(int bagQty) {
		this.bagQty = bagQty;
	}

	@Override
	public String toString() {
		return "CartDetail [cartHeader=" + cartHeader + ", bag=" + bag + ", bagQty=" + bagQty + "]";
	}
}
