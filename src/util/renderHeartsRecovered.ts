export const renderHeartsRecovered = (value: number, heartIcon: JSX.Element) => {
    let hearts = [];
    for (let i = 0; i < value; i++) {
        hearts.push(heartIcon);
    }
    return hearts;
};
