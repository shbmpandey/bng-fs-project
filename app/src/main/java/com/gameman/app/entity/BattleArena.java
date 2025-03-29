package com.gameman.app.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "battle_arena")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BattleArena {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int coins;
    private int upcomingMatches;
    private int totalMatches;
    private String imageLink;
}
