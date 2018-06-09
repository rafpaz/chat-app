package com.chat.controller;

import java.util.List;

import com.chat.model.Message;
import com.chat.service.MessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	@Autowired
	MessageService messageService;

	//Get all messages
	@RequestMapping(value = "/messages/", method = RequestMethod.GET)
	public ResponseEntity<List<Message>> getAllMessages(){
		List<Message> messages = messageService.findAllMessagesOrderByDateAsc();
		if (messages == null || messages.isEmpty()) {
			logger.warn("Messages list is empty");
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Message>>(messages, HttpStatus.OK);
	}

	//Create new message
	@RequestMapping(value = "/message/", method = RequestMethod.POST)
	public ResponseEntity<Message> addArticle(@RequestBody Message message){
		if (message == null)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		messageService.createMessage(message);
		return new ResponseEntity<>(message, HttpStatus.OK);
	}
}
