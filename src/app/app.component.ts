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
    return this.results.reduce((sum, r) => sum + r.point, 0) == (this.results.length * 10);
  }
}

const dayResults: DayResult[] = [
  new DayResult("3/31 (火)", [
    new Result("石橋 享典", 132),
    new Result("竹澤 亮", 115),
    new Result("網 亮太朗", -48),
    new Result("北口 善紀", -159)
  ]),
  new DayResult("3/29 (日)", [
    new Result("清水 明彦", 137),
    new Result("石橋 享典", 67.5),
    new Result("足立 真陽", -45),
    new Result("網 亮太朗", -53),
    new Result("竹澤 亮", -56.5)
  ]),
  new DayResult("3/28 (土)", [
    new Result("竹澤 亮", 317.5),
    new Result("足立 真陽", 182.5),
    new Result("石橋 享典", 48),
    new Result("清水 貴大", -201.5),
    new Result("清水 明彦", -296.5)
  ]),
  new DayResult("3/27 (金)", [
    new Result("竹澤 亮", 122),
    new Result("足立 真陽", 100.5),
    new Result("石橋 享典", -41),
    new Result("金子 侑起", -141.5)
  ]),
  new DayResult("3/26 (木)", [
    new Result("足立 真陽", 211),
    new Result("金子 侑起", 6.5),
    new Result("石橋 享典", -7),
    new Result("竹澤 亮", -170.5)
  ]),
  new DayResult("3/25 (水)", [
    new Result("石橋 享典", 97.5),
    new Result("竹澤 亮", 54.5),
    new Result("金子 侑起", -122)
  ]),
  new DayResult("3/23 (月)", [
    new Result("網 亮太朗", 81.5),
    new Result("竹澤 亮", -13),
    new Result("石橋 享典", -38.5)
  ]),
  new DayResult("3/21 (土)", [
    new Result("足立 真陽", 171),
    new Result("北口 善紀", 136),
    new Result("金子 侑起", 89),
    new Result("竹澤 亮", -157),
    new Result("清水 貴大", -189)
  ]),
  new DayResult("3/20 (金)", [
    new Result("北口 善紀", 233.5),
    new Result("金子 侑起", 30.5),
    new Result("足立 真陽", 2.5),
    new Result("清水 明彦", -47),
    new Result("網 亮太朗", -55.5),
    new Result("石橋 享典", -104)
  ]),
  new DayResult("3/19 (木)", [
    new Result("足立 真陽", 90.5),
    new Result("清水 明彦", 57.5),
    new Result("北口 善紀", 38),
    new Result("網 亮太朗", -146)
  ]),
  new DayResult("3/17 (火)", [
    new Result("金子 侑起", 33.5),
    new Result("清水 明彦", 22.5),
    new Result("網 亮太朗", -26)
  ]),
  new DayResult("3/14 (土)", [
    new Result("北口 善紀", 294),
    new Result("竹澤 亮", 129.5),
    new Result("足立 真陽", 19),
    new Result("金子 侑起", -102),
    new Result("清水 明彦", -106),
    new Result("網 亮太朗", -174.5)
  ]),
  new DayResult("3/13 (金)", [
    new Result("北口 善紀", 105.5),
    new Result("竹澤 亮", 76),
    new Result("金子 侑起", -36.5),
    new Result("足立 真陽", -105)
  ]),
  new DayResult("3/11 (水)", [
    new Result("金子 侑起", 99),
    new Result("網 亮太朗", 0.5),
    new Result("石橋 享典", 21),
    new Result("北口 善紀", -80.5)
  ]),
  new DayResult("3/10 (火)", [
    new Result("金子 侑起", 91.5),
    new Result("竹澤 亮", 87),
    new Result("網 亮太朗", 60),
    new Result("清水 明彦", 12.5),
    new Result("北口 善紀", -7),
    new Result("石橋 享典", -48.5),
    new Result("清水 貴大", -125.5)
  ]),
  new DayResult("3/8 (日)", [
    new Result("足立 真陽", 258),
    new Result("網 亮太朗", 53),
    new Result("清水 明彦", -160),
    new Result("石橋 享典", -111)
  ]),
  new DayResult("2/22 (土)", [
    new Result("竹澤 亮", 403),
    new Result("足立 真陽", -22),
    new Result("清水 明彦", -147),
    new Result("清水 貴大", -194)
  ]),
  new DayResult("2/11 (火)", [
    new Result("北口 善紀", 219.5),
    new Result("網 亮太朗", 94),
    new Result("清水 貴大", -114),
    new Result("石橋 享典", -159.5)
  ]),
  new DayResult("2/1 (土)", [
    new Result("竹澤 亮", 200),
    new Result("清水 明彦", 115.5),
    new Result("金子 侑起", 38),
    new Result("足立 真陽", 0),
    new Result("網 亮太朗", -63.5),
    new Result("石橋 享典", -103),
    new Result("北口 善紀", -117)
  ]),
  new DayResult("1/26 (日)", [
    new Result("竹澤 亮", 265),
    new Result("北口 善紀", 204),
    new Result("清水 明彦", -206.5),
    new Result("足立 真陽", -222.5)
  ]),
  new DayResult("1/13 (月)", [
    new Result("北口 善紀", 73),
    new Result("網 亮太朗", 33),
    new Result("竹澤 亮", -20),
    new Result("足立 真陽", -46)
  ]),
  new DayResult("1/12 (日)", [
    new Result("足立 真陽", 292.5),
    new Result("北口 善紀", 212),
    new Result("清水 明彦", -47.5),
    new Result("石橋 享典", -54),
    new Result("網 亮太朗", -72.5),
    new Result("金子 侑起", -270.5)
  ])
];

function calcRanking(dayResults: DayResult[]): Result[] {
  let playerPoints = {};
  for (const dayResult of dayResults) {
    if (!dayResult.isValid()) {
      throw new Error("invalid score in DayResult: " + dayResult.day);
    }
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
