package co.devskills.springbootboilerplate.domain.Token;

import co.devskills.springbootboilerplate.domain.User.User;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

import java.util.Date;
import java.util.UUID;

public class VerificationToken {

    @Id private UUID id;
    private String token;
    @OneToOne(fetch = FetchType.EAGER)
    private User user;
    private Date expiryDate;

    public VerificationToken(UUID id, String token, User user, Date expiryDate) {
        this.id = id;
        this.token = token;
        this.user = user;
        this.expiryDate = expiryDate;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

}
