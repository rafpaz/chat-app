package com.chat.service;

import com.chat.model.Message;
import com.chat.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("messageService")
@Transactional
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageRepository messageRepository;

	@Override
	public List<Message> findAllMessages() {
		return messageRepository.findAll();
	}

	@Override
	public List<Message> findAllMessagesOrderByDateAsc() {
		return messageRepository.findAllByOrderByDateAsc();
	}

	@Override
	public void createMessage(Message message) {
		messageRepository.save(message);
	}

	public MessageRepository getMessageRepository() { return messageRepository; }
	public void setMessageRepository(MessageRepository messageRepository) { this.messageRepository = messageRepository; }
}
