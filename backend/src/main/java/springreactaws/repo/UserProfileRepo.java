package springreactaws.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import springreactaws.profile.UserProfile;

//import java.util.ArrayList;
//import java.util.List;
import java.util.UUID;

@Repository
public interface UserProfileRepo extends JpaRepository<UserProfile, UUID> {
//    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();
//    static {
//        USER_PROFILES.add( new UserProfile(UUID.fromString("2aeb885d-8639-4880-b4a3-e83aaa8f6a80"), "Luwam", null));
//        USER_PROFILES.add( new UserProfile(UUID.fromString("9aeb885d-8639-4880-b4a3-e83aaa8f6a88"), "Fanus", null));
//    }

//    public List<UserProfile> getUserProfiles(){
//        return USER_PROFILES;
//    }
}
