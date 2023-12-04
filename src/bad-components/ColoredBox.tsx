import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"] as const;
type Color = typeof COLORS[number];

interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ChangeColor({ colorIndex, setColorIndex }: ChangeColorProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((colorIndex + 1) % COLORS.length)}>
            Next Color
        </Button>
    );
}

interface ColorPreviewProps {
    colorIndex: number;
}

function ColorPreview({ colorIndex }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor colorIndex={colorIndex} setColorIndex={setColorIndex} />
                <ColorPreview colorIndex={colorIndex} />
            </div>
        </div>
    );
}
