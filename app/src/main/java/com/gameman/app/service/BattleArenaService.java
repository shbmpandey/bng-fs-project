package com.gameman.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

import com.gameman.app.dto.BattleArenaDTO;
import com.gameman.app.entity.BattleArena;
import com.gameman.app.repository.BattleArenaRepository;

@Service
public class BattleArenaService {

    @Autowired
    private BattleArenaRepository battleArenaRepository;

    public List<BattleArenaDTO> getAllBattleArenas() {
        return battleArenaRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public BattleArenaDTO getBattleArenaById(Long id) {
        return battleArenaRepository.findById(id)
                .map(this::convertToDTO)
                .orElse(null);
    }

    private BattleArenaDTO convertToDTO(BattleArena battleArena) {
        return BattleArenaDTO.builder()
                .id(battleArena.getId())
                .coins(battleArena.getCoins())
                .upcomingMatches(battleArena.getUpcomingMatches())
                .totalMatches(battleArena.getTotalMatches())
                .imageLink(battleArena.getImageLink())
                .build();
    }
}
