import { Card, CardContent, Typography } from "@mui/material"

interface IMessage {
    content: string;
    time: Date;
}

export const Message: React.FC<IMessage> = ({ content, time }) => {

    return (
        <Card sx={{ minWidth: 275 }} style={{ padding: "5px", position: "relative" }} variant="outlined">
            <span style={{ position: "absolute", top: 10, right: 10, fontSize: "10px" }}>{time.getHours() + ":" + time.getMinutes() }</span>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )

}