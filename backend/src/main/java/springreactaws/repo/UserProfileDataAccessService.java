package springreactaws.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import springreactaws.profile.UserProfile;

import java.util.List;

@Repository
public class UserProfileDataAccessService {

    private final UserProfileRepo userProfileRepo;

    @Autowired
    public UserProfileDataAccessService(UserProfileRepo userProfileRepo) {
        this.userProfileRepo = userProfileRepo;
    }

    public List<UserProfile> getUserProfiles(){
        return userProfileRepo.findAll();
    }
}
