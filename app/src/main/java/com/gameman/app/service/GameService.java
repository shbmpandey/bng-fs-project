package com.gameman.app.service;
import com.gameman.app.dto.GameDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.gameman.app.entity.Game;
import com.gameman.app.repository.GameRepository;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public List<GameDTO> getAllGames() {
        return gameRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public GameDTO getGameById(Long id) {
        return gameRepository.findById(id).map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Game not found with ID: " + id));
    }

    private GameDTO convertToDTO(Game game) {
        return GameDTO.builder()
                .id(game.getId())
                .title(game.getTitle())
                .coins(game.getCoins())
                .liveUsers(game.getLiveUsers())
                .trendingNo(game.getTrendingNo())
                .imageLink(game.getImageLink())
                .build();
    }
}
