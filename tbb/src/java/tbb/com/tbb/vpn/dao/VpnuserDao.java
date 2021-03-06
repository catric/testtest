﻿package com.tbb.vpn.dao;


import java.util.List;
import java.util.Map;

import com.newbee.tmf.core.PageList;
import com.ibatis.dao.client.DaoException;
import com.tbb.vpn.domain.Vpnuser;

/**
 * Organ Dao
 */
public interface VpnuserDao {
	
	public PageList queryForPageList(Map params, int pageIndex, int pageSize)
			throws DaoException;
	
	public Vpnuser retrieve(java.lang.String domainPK) throws DaoException;
	
	public Vpnuser retrieveVpnuserByEmail(java.lang.String domainPK) throws DaoException;
	
	public void create(Vpnuser domain) throws DaoException;
	
	public int update(Vpnuser domain) throws DaoException;
	
	public int delete(java.lang.String domainPK) throws DaoException;
	
	public List queryForList(Map params) throws DaoException;
	
}


