package com.g16.handbagstore.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class CartDetailPK implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int cartHeader;
	private int bag;

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + bag;
		result = prime * result + cartHeader;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CartDetailPK other = (CartDetailPK) obj;
		if (bag != other.bag)
			return false;
		if (cartHeader != other.cartHeader)
			return false;
		return true;
	}

}
