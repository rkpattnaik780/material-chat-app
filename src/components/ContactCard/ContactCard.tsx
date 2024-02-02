import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export const ContactCard: React.FC = () => (

    <Card sx={{ maxWidth: 345 }} style={{ padding: "5px 0"}}>
        <CardActionArea>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <CardMedia
                        component="img"
                        height="100"
                        width="100"
                        image="https://avatars.githubusercontent.com/u/23582438"
                        alt="Profile Picture"
                    />
                </Grid>
                <Grid xs={8}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ramakrishna Pattnaik
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>
)