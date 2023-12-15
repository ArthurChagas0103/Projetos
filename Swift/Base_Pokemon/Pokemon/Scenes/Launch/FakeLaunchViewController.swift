
import UIKit

class FakeLaunchViewController: UIViewController {
    @IBOutlet weak var logo: UIImageView!

    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.hidesBackButton = true
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        UIView.animate(withDuration: 3.0,
                       delay: 0,
                       usingSpringWithDamping: 0.4,
                       initialSpringVelocity: 1,
                       options: .curveEaseOut,
                       animations: { [weak self] in
            guard let self = self, let logo = self.logo else { return }
            
            logo.frame = CGRect(x: 0, y: 0, width: 600, height: 144)
            
        }, completion: { [weak self] _ in
            guard let self = self else { return }
            
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5, execute: { [weak self] in
                guard let self = self else { return }
                self.navigationController?.popViewController(animated: false)
            })
        })
    }
}
