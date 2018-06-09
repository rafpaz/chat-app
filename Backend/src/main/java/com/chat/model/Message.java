package com.chat.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "MESSAGES")
public class Message implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Column(name = "USER", nullable = false)
	private String user;

	@NotNull
	@Column(name = "TEXT", nullable = false)
	private String text;

	@NotNull
	@Column(name = "DATE", nullable = false)
	private Date date;

	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }
	public String getUser() { return user; }
	public void setUser(String user) { this.user = user; }
	public String getText() { return text; }
	public void setText(String text) { this.text = text; }
	public Date getDate() { return date; }
	public void setDate(Date date) { this.date = date; }
}