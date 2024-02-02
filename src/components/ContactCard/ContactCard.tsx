import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export const ContactCard: React.FC = () => (

    <Card sx={{ maxWidth: 345 }} style={{ padding: "5px 0"}}>
        <CardActionArea>
            <Grid container spacing={2}>
                <Grid item={true} xs={4}>
                    <CardMedia
                        component="img"
                        height="80"
                        width="80"
                        image="https://avatars.githubusercontent.com/u/23582438"
                        alt="Profile Picture"
                    />
                </Grid>
                <Grid item={true} xs={8}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Ramakrishna Pattnaik
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>
)