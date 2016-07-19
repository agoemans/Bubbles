interface TeamInterface{
    country: string;
    code: string;
    player1: string;
    player2: string;
    player3: string;
    penalty: string;
    keeper: string;
}

module bubbleGame {
    export class TeamInfo {
        public myList = [];

        public static rawData = [
            ['Austria','AU','Juon','John','Kate','Pete','Ronaldo'],
            ['Argentina','AR','Maria','Jim','Lui','Ron','Marcel'],
            ['Brazil','BR','Fernando','Tim','Pop','Rio','Leon']
        ]

        public static generateList(): any {
            var myList = [];

            for(var i = 0; i < TeamInfo.rawData.length; i++) {
                var team: TeamInterface = {
                country : TeamInfo.rawData[i][0],
                code : TeamInfo.rawData[i][1],
                penalty : TeamInfo.rawData[i][2],
                player1 : TeamInfo.rawData[i][3],
                player2 : TeamInfo.rawData[i][4],
                player3 : TeamInfo.rawData[i][5],
                keeper : TeamInfo.rawData[i][6]
            }
                myList.push(team);
            }
            return myList;
        }

    }

}