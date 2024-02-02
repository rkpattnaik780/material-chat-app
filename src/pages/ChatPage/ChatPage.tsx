import { Container, Grid } from "@mui/material";
import { ContactList } from "components/ContactList";
import { Conversation } from "components/Conversation";

export const ChatPage: React.FC = () => {

    return (
        <Container style={{ padding: "1rem 0" }}>
            <Grid container spacing={2}>
                <Grid item={true} xs={3} style={{ padding: "10px"}}>
                    <ContactList />
                </Grid>
                <Grid item={true} xs={9} style={{ padding: "10px 0"}}>
                    <Conversation />
                </Grid>
            </Grid>
        </Container>
    );

}