import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ setValue, value }: { setValue: (value: number) => void; value: number }): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}

function Halver({ setValue, value }: { setValue: (value: number) => void; value: number }): JSX.Element {
    return <Button onClick={() => setValue(value / 2)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue} />
            <Halver value={dhValue} setValue={setDhValue} />
        </div>
    );
}
