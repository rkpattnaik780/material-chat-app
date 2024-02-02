import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface IContact {
    name?: string | never;
    imageURL?: string | never;
}

export const ContactCard: React.FC<IContact> = ({ name, imageURL }) => (

    <Card sx={{ maxWidth: 345 }} style={{ padding: "5px 0"}}>
        <CardActionArea>
            <Grid container spacing={2}>
                <Grid item={true} xs={4}>
                    <CardMedia
                        component="img"
                        height="80"
                        width="80"
                        image={imageURL || "./profile_pic.png" }
                        alt="Profile Picture"
                    />
                </Grid>
                <Grid item={true} xs={8}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            { name || "John Doe"}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>
)