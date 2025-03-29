package com.gameman.app.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gameman.app.entity.BattleArena;

@Repository
public interface BattleArenaRepository extends JpaRepository<BattleArena, Long> {
}