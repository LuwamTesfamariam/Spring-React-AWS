package springreactaws.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import springreactaws.profile.UserProfile;

import java.util.List;

@Repository
public class UserProfileDataAccessService {

    private final UserProfileData userProfileData;

    @Autowired
    public UserProfileDataAccessService(UserProfileData userProfileData) {
        this.userProfileData = userProfileData;
    }

    public List<UserProfile> getUserProfiles(){
        return userProfileData.getUserProfiles();
    }
}
