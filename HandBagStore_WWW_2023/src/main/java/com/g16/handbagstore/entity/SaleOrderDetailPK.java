package com.g16.handbagstore.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class SaleOrderDetailPK implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int saleOrder;
	private int bag;

	public SaleOrderDetailPK() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + bag;
		result = prime * result + saleOrder;
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
		SaleOrderDetailPK other = (SaleOrderDetailPK) obj;
		if (bag != other.bag)
			return false;
		if (saleOrder != other.saleOrder)
			return false;
		return true;
	}
}
