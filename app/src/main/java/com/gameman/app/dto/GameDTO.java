package com.gameman.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameDTO {
    private Long id;
    private String title;
    private int coins;
    private int liveUsers;
    private int trendingNo;
    private String imageLink;
}
