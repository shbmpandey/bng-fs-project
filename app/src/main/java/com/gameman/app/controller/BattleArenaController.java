package com.gameman.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.gameman.app.dto.BattleArenaDTO;
import com.gameman.app.service.BattleArenaService;

@RestController
@RequestMapping("/contest/battle_arena")
public class BattleArenaController {

    @Autowired
    private BattleArenaService battleArenaService;

    @GetMapping
    public List<BattleArenaDTO> getAllBattleArenas() {
        return battleArenaService.getAllBattleArenas();
    }

    @GetMapping("/{id}")
    public BattleArenaDTO getBattleArenaById(@PathVariable Long id) {
        return battleArenaService.getBattleArenaById(id);
    }
}
