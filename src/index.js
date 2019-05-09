import { Application, Graphics } from 'pixi.js';
import sound from 'pixi-sound';

const app = new Application({
    backgroundColor: 0x999999,
    width: 400,
    height: 400,
    autoStart: false
});
document.body.appendChild(app.view);

function createButton(visible) {
    const button = new Graphics()
        .beginFill(0x0, 0.5)
        .drawRoundedRect(0, 0, 100, 100, 10)
        .endFill()
        .beginFill(0xffffff);

    button.pivot.set(50, 50);
    button.position.set(app.view.width / 2, app.view.height / 2);
    button.interactive = true;
    button.buttonMode = true;
    button.visible = visible;
    return button;
}

const playButton = createButton(true)
    .moveTo(36, 30)
    .lineTo(36, 70)
    .lineTo(70, 50);

const stopButton = createButton(false)
    .drawRect(34, 34, 32, 32);

app.stage.addChild(playButton, stopButton);
app.render();

app.loader.add('musical', 'musical.mp3').load(function() {
    playButton.on('click', function() {
        sound.play('musical', { loop: true });
        playButton.visible = false;
        stopButton.visible = true;
        app.render();
    });

    stopButton.on('click', function() {
        sound.stop('musical');
        playButton.visible = true;
        stopButton.visible = false;
        app.render();
    });
});
