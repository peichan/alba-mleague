import { Component } from '@angular/core';

class Result {
  player: string;
  point: number;
  constructor(player: string, point: number) {
    this.player = player;
    this.point = point;
  }
}
class DayResult {
  day: string;
  results: Result[];
  constructor(day: string, results: Result[]) {
    this.day = day;
    this.results = results;
  }
  isValid() {
    return true;  // TODO: 実装
  }
}

const dayResults: DayResult[] = [
  new DayResult("1/13 (月)", [
    new Result("北口 善紀", 73),
    new Result("網 亮太朗", 33),
    new Result("竹澤 亮", -20),
    new Result("足立 真陽", -46)
  ]),
  new DayResult("1/12 (日)", [
    new Result("足立 真陽", 305.5),
    new Result("北口 善紀", 262.5),
    new Result("清水 明彦", -47.5),
    new Result("網 亮太朗", -80),
    new Result("石橋 享典", -91),
    new Result("金子 侑起", -289.5)
  ])
];

function calcRanking(dayResults: DayResult[]): Result[] {
  let playerPoints = {};
  for (const dayResult of dayResults) {
    for (const result of dayResult.results) {
      if (result.player in playerPoints) {
        playerPoints[result.player] += result.point;
      } else {
        playerPoints[result.player] = result.point;
      }
    }
  }
  let ranking: Result[] = [];
  for (const player in playerPoints) {
    ranking.push(new Result(player, playerPoints[player]));
  }
  ranking.sort(function(a, b) { return b.point - a.point });
  return ranking;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dayResults = dayResults;
  ranking = calcRanking(dayResults);
  getBadgeType(rank: number): string {
    if (rank == 0) {
      return "is-top";
    } else if (rank == 1 || rank == 2) {
      return "is-top-three";
    }
    return "";
  };
}
