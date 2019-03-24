interface iEngine {
    start(callback: (startStatus: boolean, engineType: string) => void ): void
    stop(callback: (startStatus: boolean, engineType: string) => void ): void
}

class Engine1 implements iEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, 'V8');
        }, 1000);
    }    
    stop(callback: (startStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, 'V8');
        }, 1000);
    }

    
}
