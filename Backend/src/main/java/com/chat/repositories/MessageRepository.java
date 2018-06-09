package com.chat.repositories;

import com.chat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
	Message findByUser(String user);
	List<Message> findAllByOrderByDateAsc();
}
