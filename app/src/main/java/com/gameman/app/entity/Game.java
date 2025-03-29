package com.gameman.app.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "games")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false)
    private int coins;

    @Column(nullable = false)
    private int liveUsers;

    @Column(nullable = false, unique = true)
    private int trendingNo;

    @Column(nullable = false)
    private String imageLink;
}
