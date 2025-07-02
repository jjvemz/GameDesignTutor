package co.devskills.springbootboilerplate.domain.Token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VerifyTokenRepository extends JpaRepository<VerificationToken,Long> {
    VerificationToken findByToken(String token);
}