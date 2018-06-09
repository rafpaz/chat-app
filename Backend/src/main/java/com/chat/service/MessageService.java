package com.chat.service;

import com.chat.model.Message;

import java.util.List;

public interface MessageService {
	List<Message> findAllMessages();
	List<Message> findAllMessagesOrderByDateAsc();
	void createMessage(Message message);
}
