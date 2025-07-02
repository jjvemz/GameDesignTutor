package co.devskills.springbootboilerplate.domain.User;

import jakarta.persistence.Entity;
import java.util.UUID;


@Entity
public class User {

    private UUID id;
    private String email;
    private String name;
    private String password;
    private Boolean isVerified = false;

    public User(UUID id, String email, String name, String password, Boolean isVerified) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.isVerified = isVerified;
    }


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getVerified() {
        return isVerified;
    }

    public void setVerified(Boolean verified) {
        isVerified = verified;
    }
}
