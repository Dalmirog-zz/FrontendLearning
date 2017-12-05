function startGame(){
    // Starting a new game

    let playerName: string | undefined = getInputValue('playername');    
    logPlayer(playerName);

    postSCore(80, playerName);
    postSCore(-5, playerName);
}
function logPlayer(name: string = ' MultiMath Player '): void {
    console.log(`New game starting for player: ${name}`);
}

function postSCore(score: number, playerName: string = 'MultiMath Player'): void{

    let logger: (value: string) => void;
    
    if(score < 0){
        logger = logError;
    }
    else{
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`)

}

function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)

    if  (inputElement.value === ''){
        return undefined;
    }
    else{
        return inputElement.value;
    }
}
document.getElementById('startGame')!.addEventListener('click',startGame);

let logMessage = (message: string) => console.log(message);

function logError(error: string): void {
    console.error(error);
}