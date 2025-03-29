package com.gameman.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor 
@Builder
public class BattleArenaDTO {
    private Long id;
    private int coins;
    private int upcomingMatches;
    private int totalMatches;
    private String imageLink;
}