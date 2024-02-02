import { Container, Grid } from "@mui/material";
import { ContactList } from "components/ContactList/ContactList";
import { Conversation } from "components/Conversation/Conversation";

export const ChatPage: React.FC = () => {

    return (
        <Container style={{ padding: "1rem 0" }}>
            <Grid container spacing={2}>
                <Grid xs={3} style={{ padding: "10px"}}>
                    <ContactList />
                </Grid>
                <Grid xs={9} style={{ padding: "10px 0"}}>
                    <Conversation />
                </Grid>
            </Grid>
        </Container>
    );

}