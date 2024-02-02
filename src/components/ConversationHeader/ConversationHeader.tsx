import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export const ConversationHeader: React.FC = () => {

    return (
        <Card sx={{ maxWidth: 345 }} style={{ margin: "5px 0" }} variant="outlined">
            <CardActionArea>
                <Grid container spacing={2}>
                    <Grid item={true} xs={4}>
                        <CardMedia
                            component="img"
                            height="100"
                            width="100"
                            image="https://avatars.githubusercontent.com/u/23582438"
                            alt="Profile Picture"
                        />
                    </Grid>
                    <Grid item={true} xs={8}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ramakrishna Pattnaik
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );

}